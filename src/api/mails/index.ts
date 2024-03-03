import { instance } from "api/api";

export const sellCouch = 
    (name: string, email: string, phone: string, message: string, brand: string, files: FileList | null) => {
        const formData = new FormData();

        if (files) {
            Array.from(files).forEach(file => {
                formData.append('uploaded_images[]', file);
            });
        }

        formData.append('body', JSON.stringify({
            name,
            email,
            phone,
            brand,
            message,
        }));

        return instance.post('/mailer/sell_couch', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
};

export const contactUs = (name: string, email: string, phone: string, message: string) => instance.post('/mailer/contact_us', {
    name,
    email,
    phone,
    message,
});