import emailjs from "@emailjs/browser";

export const sendCustomEmail = async (to_email: string, to_name: string) => {

    const userKey = import.meta.env.VITE_EMAIL_USER_ID;
    emailjs.init(userKey);
    console.log(to_email);
    
    try{
        const response = 
        await emailjs
        .send(
            import.meta.env.VITE_EMAIL_SERVICE_ID,
            import.meta.env.VITE_EMAIL_TEMPLATE_ID,
            {
                to_email:to_email,
                to_name:to_name
            }
        );

        console.log(response);
    }
    catch (e){
        console.error(e);
        throw e; // rethrow the error to handle in the caller function if needed
    }
}