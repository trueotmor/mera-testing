import axios from "axios";

const api = 'https://api.1282075-cv69336.tw1.ru/api/dashboard'

export const getStrategies = async (stNumber = 1) => {
   const response = await axios.get(api, {
            params: {
                st_num: stNumber
            }
        }
    );
    return response.data;
}