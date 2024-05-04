const result: Record<string, string> = {};


Object.keys(process.env).map((key: string) => {
    if (process.env[key]) {
        result[key] = process.env[key] as string;
    }
})


const environment = {
    restUrl: result['REACT_APP_PUBLIC_REST_API'] || '',
    imagesUrl: result['REACT_APP_PUBLIC_IMAGES_URL'] || ''
};

export default environment;
