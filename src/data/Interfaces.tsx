export interface IReport {
    id?: number;
    inspectionSite?: string;
    managerCompleted?: boolean;
    noHazard?: boolean
    inspectionDate?: string | null | undefined;
    inspectedBy?: string
    manager?: string
    inspectionType?: string
    insepctionAreaLevel?: string
    inspectionAreaDept?: string
    statusTrackingStatus?: string
    statusTrackingNumber?: string
    inspectionComments?: string
}