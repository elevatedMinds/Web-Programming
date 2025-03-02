export function MockData(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                objects: ['Place 1', 'Place 2', 'Place 3', 'Place 4', 'Place 5'],
                rotation: Math.ceil(Math.random() * 100),
            });
        }, 1000); //delay - a second
    });
}
