const apiCall = () => {
    return new Promise((resolve,reject) => {
        resolve("ok fine");
    });
};

const fun = async () => {
    try {
        await apiCall();  
    } catch (error: any) {
        console.log(error.message);
    }
}