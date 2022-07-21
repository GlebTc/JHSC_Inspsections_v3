export interface IReport {
    id?: number;
    inspectionSite?: string;
    inspectionType?: string
    inspectionDate?: string
    inspectedBy?: string
    managerCompleted?: boolean;
    inspectionArea?: {
        level?: string
        area?: string
    }
    statusTracking?: {
        status?: string
        trackingNumber?: number
    }
    inpsectionComments?: string
    manager?: string
    noHazard?: boolean
    inspectioHazardDetails?:{
        conditions?: string
        workOrderNumber?: number
        previouslyIdentified?: boolean
        dateCompleted?: string
    }
}