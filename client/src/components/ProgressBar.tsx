import { useAuth } from "@/hooks/AuthUser";
import { useCycle } from "@/hooks/useCycle";
import { evaluatorGetsOthersEval } from "@/utils/evaluatorGetsOthersEval";
import { getAutoEval } from "@/utils/getAutoEval";
import { getCollaboratorsByName } from "@/utils/getCollaboratorsByName";
import React from "react";
import { useNavigate } from "react-router-dom";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

// there are 2 * n activities to be done => 1 autoeval + 1 otherseval for each collaborator

interface AppState {
    percent: number;
    data: { x: number; y: number }[];
  }
  

function getData(percent: number) {
return [
    { x: 1, y: percent },
    { x: 2, y: 100 - percent },
];
}

function App() {
    const [state, setState] = React.useState<AppState>({
        percent: 0,
        data: getData(0),
    });

    const [ percent, setPercent] = React.useState<number>(0);

    const [ collaborators, setCollaborators ] = React.useState<any[]>([]);
    
    const [ nOfAutoEvalsDone, setNOfAutoEvalsDone ] = React.useState<number>(0);
    const [ nOfOthersEvalsDone, setNOfOthersEvalsDone ] = React.useState<number>(0);

    const [ totalNumberOfActivities, setTotalNumberOfActivities ] = React.useState<number>(0); // # of activities to be done

    const navigate = useNavigate();
    const { user, isAuthenticated } = useAuth();
    const { _cycle, callAllUpdates } = useCycle();


    React.useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
          }
      
        if (user) { // user is always (should be) defined when isAuthenticated (true)
            callAllUpdates(user.id, false);
        }
        getCollaboratorsByName(" ").then((data) => setCollaborators(data))
    }, []);

    // setting the total number of activities to be done
    React.useEffect(() => {
        setTotalNumberOfActivities(collaborators.length * 2);
    }, [collaborators])

    // counting the number of activities done
    React.useEffect(() => {
        let count = 0;
        if (_cycle !== null) {
            // counting the number of autoevals done
            collaborators.forEach((collaborator) => {
                getAutoEval(collaborator.id, _cycle.id)
                .then((autoEval) => {
                    if (autoEval !== null) {
                        if (autoEval.isFinalized) count ++;
                    }
                })
                .then(() => {
                    setNOfAutoEvalsDone(count);
                })
            }) 
        }
    }, [collaborators, _cycle])

    React.useEffect(() => {
        // counting the number of othersevals done
        let count = 0;
        if (_cycle !== null) {
            collaborators.forEach((collaborator) => {
                evaluatorGetsOthersEval(collaborator.id, _cycle.id)
                .then((othersEvals) => {
                    if (othersEvals.length > 0) {
                        if(othersEvals[0].isFinalized) count++;    
                    }
                })
                .then(() => {
                    setNOfOthersEvalsDone(count);
                })
            })
        }
    })

    // calculate the percentage and update state
    React.useEffect(() => {
        const totalCompleted = nOfAutoEvalsDone + nOfOthersEvalsDone;

        console.log(nOfAutoEvalsDone)
        console.log(nOfOthersEvalsDone)

        let percent = totalNumberOfActivities > 0 ? (totalCompleted / totalNumberOfActivities) * 100 : 0;

        percent = Math.round(percent);
        
        setPercent(percent);

        setState({
            percent,
            data: getData(percent),
        });
    }, [nOfAutoEvalsDone, nOfOthersEvalsDone, totalNumberOfActivities]);

    return (
        <div>
        <svg viewBox="45 50 310 310" width="100%" height="100%">
            <VictoryPie
              standalone={false}
              animate={{ duration: 1000 }}
              width={400}
              height={400}
              data={state.data}
              innerRadius={120}
              cornerRadius={25}
              labels={() => null}
              style={{
                data: {
                  fill: ({ datum }) => {
                    const color = datum.y > 30 ? "#A28BFE" : "red";
                    return datum.x === 1 ? color : "black";
                  },
                },
              }}
            />
            <VictoryAnimation duration={1000} data={state.data}>
            {() => {
                return (
                <>
                    <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={180}
                    text={`${percent}%`}
                    style={{ fontSize: 80, fill: "#FFFFFF", fontWeight: 800 }}
                    />
                    <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={195}
                    y={230}
                    text="Concluída"
                    style={{ fontSize: 30, fill: "#FFFFFF" }}
                    />
                </>
                );
            }}
            </VictoryAnimation>
        </svg>
        </div>
    );
}

export default App;