export const adaptData = (data) => {

    const convertData = (dataArr) => dataArr.map((el) => {
            return {'x': el.time, 'y': el.value}
        });
    

    return {   
        data_btc: convertData(data.data_btc),
        data_usd: convertData(data.data_usd),
        title: data.title,
    }
    
}