import * as fs from "fs";
import * as readline from 'readline';


import {populateAddress} from "./populateAddress";
import {populateReadings} from "./populateReadings";

function mapLocation(data:Array<string>) {
     return {
        "user": null,
        "label": `${data[6]}, ${data[5]}, ${data[4]}`,
        "pin": null,
        "coords": `${data[1]}, ${data[2]}`,
        "state": data[4],
        "district": data[5],
        "tehsil": data[6],
        "city": null,
        "address2": null,
        "address1": data[0]
    };
}

function getSource(data:string) {
    const sourceMap = {
        "Bore Well": "bore_well",
        "Dug Well": "dug_well",
        "Hand Pump": "hand_pump",
        "Tap": "tap",
        "RO": "ro",
        "Tube Well": "tube_well",
        "MONITORING": "monitoring",
        "NHS": "nhs"
    }
    return sourceMap[data]
}

function mapReading(data:Array<string>) {
    return {
        "type": "baseline",
        "location": null,
        "source": getSource(data[3]),
        "dateTime": data[7],
        "pH": data[8],
        "conductivity": data[9],
        "hardness": data[10],
        "alkalinity": data[11],
        "calcium": data[12],
        "magnesium": data[13],
        "sodium": data[14],
        "potassium": data[15],
        "iron": data[16],
        "carbonate": data[17],
        "bicarbonate": data[18],
        "chloride": data[19],
        "sulphate": data[20],
        "nitrate": data[21],
        "fluoride": data[22],
        "silicate": data[23],
        "phosphate": data[24],
        "tds": data[25],
        "turbidity": data[26],
        "arsenic": data[27],
        "temperature": null,
        "boron": null,
        "zinc": null,
        "lead": null,
        "mercury": null,
        "selenium": null,
        "cadmium": null,
        "copper": null,
        "manganese": null,
        "chlorine": null,
        "oxygen": null,
        "remark": null
    };
}


function mapData(data:string) {
    const dataAr:Array<string> = data.split(',');
    const locationData = mapLocation(dataAr);
    const readingData = mapReading(dataAr);
    return { locationData, readingData }
}

export async function populate(database) {
    let filePath = "/Users/vidya/water-iot-app/backend/GWQ_2010-2018-sorted.csv";
    let count = 0;
    let start = 0; //start rows
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });
    const tenantId = '6363785bc4c8d3dda53cf95a';
    const currentUserId ='6363785bc4c8d3dda53cf958';
    const options = {};
    let previousLoc = "";
    let locationId = "";
    for await (const line of rl) {
        console.log(count);
        console.log(`Line from file: ${line}`);
        if(count >= start) {
            let { locationData, readingData } = mapData(line);

            console.log("location: " + JSON.stringify(locationData));
            console.log("reading: " + JSON.stringify(readingData));
            const currentLoc = locationData.address1;
            if(currentLoc !== previousLoc) {
                previousLoc = currentLoc;
                const locationRecord = await populateAddress(database, options, locationData, tenantId, currentUserId);
                locationId = locationRecord.id
                console.log("locationId: " + locationId);
            }
            const dataReading = {...readingData, location: locationId}
            const readingRecord = await populateReadings(database, options, dataReading, tenantId, currentUserId);

        }
        count++;
        console.log("*********");
    }
    return database;
}