const DB_VAR = 'facilities';

function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}

interface facility {
    id: string;
    createdAt: string;
    name: string;
    type: "range" | "indoor";
    address: string;
       
}
export const initFacilities = () =>{
    return new Promise((resolve, reject) => {
        const facilitiesDummy = [
            {   
                id: 1,
                createdAt: '1/12_2020',
                name: 'trakcman',
                type: "range",
                address: "string"
            }
        ];
        const convertedData = JSON.stringify(facilitiesDummy)
        localStorage.setItem(DB_VAR, convertedData);
    })
}
export const getFacilities = () => {
    return new Promise((resolve, reject)=>{
        delay(1000).then(()=>{
          const storageItem = localStorage.getItem(DB_VAR);
          resolve(storageItem);
        })
    })
}

export const setFacilities = (facility:facility) => {
    return new Promise((resolve, reject)=>{
        const storageItem = localStorage.getItem(DB_VAR);
        const convertedData = JSON.stringify(storageItem);
        delay(1000).then(()=>{
            localStorage.setItem(DB_VAR, convertedData);
            return resolve(true);
        })
    })
}

export const removeFacilities = (id:number) => {
    return new Promise((resolve, reject)=>{
        delay(1000).then(()=>{
            try {
                localStorage.removeItem(DB_VAR, );
                resolve(true);
              } catch(e) {
                // Access denied :-(
                reject(false)
            }
        })
    })
}


