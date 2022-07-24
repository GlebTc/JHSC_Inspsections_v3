export interface IReport {
    id?: number;
    inspectionSite?: string;
    managerCompleted?: boolean;
    inspectionDate?: string | null | undefined;
    inspectedBy?: string
    manager?: string
    inspectionType?: string
    insepctionAreaLevel?: string
    inspectionAreaDept?: string
}