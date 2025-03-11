export function MockData(){ //fetchlabels
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                objects: ['Bess', 'Place 2', 'Place 3', 'Place 4', 'Place 5', 'Parrot'],
                rotation: Math.ceil(Math.random() * 100),
            });
        }, 1000); //delay - a second
    });
}
