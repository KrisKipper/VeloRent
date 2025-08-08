import {BICYCLE_TYPES} from "../../../shared/constants/bikes.ts";

export type ReportTheftRequest = {
    licenseNumber: string;
    ownerFullName: string;
    type: BicycleTypeValue;
    clientId: string;
    color?: string;
    date?: Date | string;
    description?: string;
}

export type BicycleTypeValue = typeof BICYCLE_TYPES[number]['value'];

export type ReportTheftResponse = {
    "status": string,
    "data": {
        "status": string,
        "licenseNumber": string,
        "type": BicycleTypeValue,
        "ownerFullName": string,
        "clientId": string,
        "createdAt": string,
        "updatedAt": null | string,
        "color": null | string,
        "date": string,
        "officer": null | string,
        "description": null | string,
        "resolution": null | string,
        "_id": string
    }
}
