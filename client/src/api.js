export const fetchResponse = async (chat) => {
    try {
        // after deployment, change the fetch URL below
        const response = await fetch('http://localhost:3080/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                message: chat.map((message) => message.message).join(' \n '),
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        // You might want to throw the error or return an error object here
        throw error;
    }
};
