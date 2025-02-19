export interface IApiResponse {
    message: string,
    response: boolean,
    data: any
}

export interface IparentDept{
    departmentId:number,
    departmentName:string,
    departmentLogo:string
}

export interface IChildDept{
    childDeptId:number,
    parentDeptId:number,
    departmentName:string
}

export interface IProject {
    projectId: number,
    projectName: string,
    clientName: string,
    startDate: string,
    leadByEmpId: number,
    contactPerson: string,
    contactNo: string,
    emailId: string,
  }
  export interface IProjectEmployee {
    empProjectId: number
    projectId: number
    empId: number
    assignedDate: string
    role: string
    isActive: boolean
  }