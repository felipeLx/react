import React from 'react';

const Weather = ({description, city, country, error, temperature}) => {
    
    const keyWords = ['cloudy', 'clouds', 'cloud', 'overcast', 'clear', 'snow', 'rain'];
    let weatherState = [];

    const matchValues = () => {
        const weatherDescription = description.split(' ');
            for(let i=0; i < weatherDescription.length; i++) {
                if(keyWords.includes(weatherDescription[i])) {
                    weatherState = weatherDescription[i];
                } 
            }
            console.log(weatherState);
                switch(weatherState) {
                    case 'clear':
                        // eslint-disable-next-line
                        return <img src='https://lh3.googleusercontent.com/cDKrXnqkD6IqB2TSGurjnGJzPSe1JYEzPbpJkuxAGOEMvekDY_koUK5eMSHNPhz0GU7EdXJxSFoTkp0_CNdv5leYa2iccUvqCVOfy2xzsWl1azXQUTq5RX_S-wkYJmA6S9CCBURfeod-jE6Zlf7W18LMUsCAihliWgJOBrL-Cg223ntIcPLyhR4qcoarmSHt3TNAUs9ZPS4GvDPK7P5zRkDIVgqCxoGDyvHaRR-togxYThOsdbHvP6MKUWkAuHZR6e5eqDwYisLRlhxGwB13UAa-Sp5lkimQWNmTWvneWYlcgMeJDZSGtTOg9O9BxG3_VTox1clDgYEQBJUm-W_FWi4BkC26Bt5yPpCRvMifq_r7KECRsLH8Wa-JdTFXg4WXU-XDp7DLZaXBDALXm_MyqKOexEH-F4WQyXB4q7tR78H2pNCpWgHSUvf_PnsvWXCASlQQcjOzjgKVhHEVhkAmUB7pGiMOtbOT1SrbN423H7UO99g2Lg5euNAUL9sptgvDBw4uBDFg58w693EAOq__NkSY7ZVG2wo-uvYfDrjtdEqevZJSToYaJHQ9XkK4bKc2kXI2YJUGGW7GzVkzMO4TW-7oKP_Kyehg--Uu9QifUlwIXtk9FrY94-NUum3cBP_jA6hNx1aVGrXMKxqSH3vB4Jqw4MDc_qPmwkWc8UP6T0grRF6V1D6_QSc=w560-h374-no' />;
                    case 'clouds':
                        // eslint-disable-next-line
                        return <img src='https://lh3.googleusercontent.com/8FRLTZRlkAI-CorvamH48LD7LXvmtCcz4B2kcd696UIGB3_2mX-nIZcx1S9XhRCszHRkq-RVYnFKz7J_Nh8AWpZb1GdMyPBKBNjSteO90TKY-c2K423nFdlefHjIsPTWqcO80bzm30beSrGn7BA3UzygAT-DekVts2LTaRrr8h2qYvEi1S3qAFm1rW29ehDhNCe-gIZ7LcPaD0Ys91NIwDBRxJs6RTeIFf0zNmA3N6Wi8kqyD5HLLydMLM4Va4zavIrPDDBQ25s4ZiJlPDTa3MY06hD0ac-akw0Jk-G9cYmmsdebHq5pyDgNesbuJHl0mc7g7TDplT25-lyvY7XrAcwef9jJCCC0Zx_b0xSlH-zgJtmO67Ci15wzOSTFnBB7tZC_R10h6iyIkc2oxiRsS0p9fAF3CUFlC5wRFlMNP8fv1ZKxgvJJ2ZvvfOpUXvHDdO7aiXMGcKnc4gklFHgaL6TVSnK4fK74KGmjWwzrBR01SwcUpzJGQ8Fffz5LviifnYz832TbJ5eW_vjC7IAwlH-dt7EEkXfv6KskNK79wEQW3nWNi1RUZaa1h-K44RLF8DybdwkUaeIYEyM4XAB5l2qA-IaT-h7EvBIV9OyZj4oiwL5N1-JIIryMVtipD3D5WlYKP66I33FdhjLJqiR7p7buMWYSP2lXa08bOwEZNcgKxKH_GDlx32M=w956-h637-no' />;
                    case 'snow':
                        // eslint-disable-next-line
                        return <img src='https://lh3.googleusercontent.com/A64S4-9474bwbBPpdFKoXf5CV6JxvEaXwI_tpSzwUWkxMZGwwENTDRtSF3nm5C9-lGF6BKvjV7SByQ1Jp1KddLCTDA55ucsmt7KK0PKgmOp_qyxFvxzvGJgFOuZO8j1VTvBj80SmVnHLSG3-LYA9iyIOQ89o0ds22cAqzGdrGEPJyQR6M8nIRxPUg6vhFinCDVkSUjNV-iwlzlV1GOY2atONQqLD-vtqBCiOvQba06azv-5XtRyds1MOqXMPO4sDuk9jZTMT0xH0l9kkwdRrHapx6RWmXjo4OHnkJy9J8I7elYm38IQtmExpPsxRJbMmVSEzWAs0ZMzLdj1ef5QHzTrEBMCm0OrNwel_3qi5XWblDxBFP6Z8CK0PETfIM_DjSV4xwBsT61wGwSpHNVRfTCUcmZXKCQtM-yL2plq2QWcns1eknMnUjt7_TLlS7WkkbdB4cKSp9AnkTubAkKxirZHU_iRFaC99eG7ffFyNQAbuwe5nj1rxft8vYCtT_vSWlD9EcJycVo1gUzTMT2jTdSxYGO9h5xt8MvSCf9G66LXdB4l2RRAQ1RdWQGXfEaNOEgswk3DL7Eci-wzAJN7AbDhqvI_tHm2UDOCgYCSrf4mg-IIGpeLac_gDBF6iQHKjy-RUJJr_vkZSlOmJuJBS8n1kkTJGjKPTFlc-F8RgOC1FqOFxuNWvaB4=w640-h427-no' />;
                    case 'rain':
                        // eslint-disable-next-line
                        return <img src='https://lh3.googleusercontent.com/IogwlBDTKBFcFKOHafd5C5dwFPz5JVXtmgb7lrhBSlZb7KcnuPlqaMX5cHbU1Ljmpfpc79434v6fjIAlfC3tIoN-pAZNA-zinI595JDEf0jy4b4OFEK8kYpsUPLNXxJVTg_tVO4lZhb06ixCw-NseQRElXfMpTyywtutOL0ZJh86hV56suVOoQjLJE0lcCnzzCQYTa26nXD03XLPWFP7aEjiiUOfjZLO77qhYF7hbzqZdCHuSwRzsV5UWE3eX3gTNe_mEcbMo8lfDo6-9O11xPpYIC7U0Wc87nkZxzjIAFOGjRj21EOr1Gw7SDEJKhPOFv-P0MvcwgcjZq6kYXLiY1abBVRPr_RWLnamyIVnH_8Q_37cdAA612eQudlHLNlcLGEJ3gWjhnjJWmrcgGjFbEUQr-lt9hoKtgS2Na5qaphTKjRkswoDj6K7hTUysD7FOoFgYO8j-WX3inNUhEoP2S8gnbP4PNow637CfG7aCR0cozr3VzKbZ5MkDsUg4o6APMiP3SKO6nsn7Uv0ibaSbY9QJ2GaBVsAYhoNmbTSHixoDNkVMls5Kpa-ds-6Tj6dYmERsBxNwv6lrEGcjUvsu5n0umqLJmtr0t7egMEFpNnuO4rki5cTm1ayGYLohf8etGLWRkhsnorEj0cS2uzAih3G2Uy41x95pE7T7AokZMtznQEIs0Fn2MY=w1117-h637-no' />;    
                    default:
                        // eslint-disable-next-line
                        return <img src='https://lh3.googleusercontent.com/8FRLTZRlkAI-CorvamH48LD7LXvmtCcz4B2kcd696UIGB3_2mX-nIZcx1S9XhRCszHRkq-RVYnFKz7J_Nh8AWpZb1GdMyPBKBNjSteO90TKY-c2K423nFdlefHjIsPTWqcO80bzm30beSrGn7BA3UzygAT-DekVts2LTaRrr8h2qYvEi1S3qAFm1rW29ehDhNCe-gIZ7LcPaD0Ys91NIwDBRxJs6RTeIFf0zNmA3N6Wi8kqyD5HLLydMLM4Va4zavIrPDDBQ25s4ZiJlPDTa3MY06hD0ac-akw0Jk-G9cYmmsdebHq5pyDgNesbuJHl0mc7g7TDplT25-lyvY7XrAcwef9jJCCC0Zx_b0xSlH-zgJtmO67Ci15wzOSTFnBB7tZC_R10h6iyIkc2oxiRsS0p9fAF3CUFlC5wRFlMNP8fv1ZKxgvJJ2ZvvfOpUXvHDdO7aiXMGcKnc4gklFHgaL6TVSnK4fK74KGmjWwzrBR01SwcUpzJGQ8Fffz5LviifnYz832TbJ5eW_vjC7IAwlH-dt7EEkXfv6KskNK79wEQW3nWNi1RUZaa1h-K44RLF8DybdwkUaeIYEyM4XAB5l2qA-IaT-h7EvBIV9OyZj4oiwL5N1-JIIryMVtipD3D5WlYKP66I33FdhjLJqiR7p7buMWYSP2lXa08bOwEZNcgKxKH_GDlx32M=w956-h637-no' />;
                }
                // if(keyWords.includes(weatherDescription[i])) {
                //     // eslint-disable-next-line
                //     return <img src='https://media.freestocktextures.com/cache/74/8b/748ba3fe5976d8b03219a64851d2790d.jpg' />
                }
    

    return (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} ºC</p>}
            {description && <p>Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    );
};

export default Weather;