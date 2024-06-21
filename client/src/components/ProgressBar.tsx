import React from "react";
import { VictoryPie, VictoryAnimation, VictoryLabel } from "victory";

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
    percent: 25,
    data: getData(0),
});

    React.useEffect(() => {
        const setStateInterval = window.setInterval(() => {
        let percent = 25;
        percent += Math.random() * 25;
        percent = percent > 100 ? 0 : percent;
        setState({
            percent,
            data: getData(percent),
        });
        }, 2000);

        return () => {
        window.clearInterval(setStateInterval);
        };
    }, []);

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
            <VictoryAnimation duration={1000} data={state}>
            {(newProps) => {
                return (
                <>
                    <VictoryLabel
                    textAnchor="middle"
                    verticalAnchor="middle"
                    x={200}
                    y={180}
                    text={`${Math.round(newProps.percent)}%`}
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