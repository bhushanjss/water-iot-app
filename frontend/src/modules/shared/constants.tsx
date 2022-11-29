const normalLevel = {
    tds: {
        min: 50,
        max: 1500
    },
    pH: {
        min: 6.5,
        max: 8.5
    },
    conductivity: {
        min: 200,
        max: 400
    },
    turbidity: {
        min: 0,
        max: 5
    },
    temperature: {
      min:0,
      max: 30
    },
    chloride: {
        min: 0,
        max: 250
    },
    sulfate: {
        min: 0,
        max: 250
    },
    magnesium: {
        min: 0,
        max: 50
    },
    calcium: {
        min: 0,
        max: 75
    },
    sodium: {
        min: 0,
        max: 200
    },
    potassium: {
        min: 0,
        max: 12
    },
    nitrate: {
        min: 0,
        max: 5
    }
};

//source https://environmentalsystemsresearch.springeropen.com/articles/10.1186/s40068-016-0053-6
export default normalLevel;