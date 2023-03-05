export const adaptData = (data) => {

    const convertData = (dataArr) => {
        return dataArr.map((el) => {
            return {'x': el.time, 'y': el.value}
        });
    }

    const new_data = 
    {   
        data_btc: convertData(data.data_btc),
        data_usd: convertData(data.data_usd),
        title: data.title,
    }
    return new_data
}