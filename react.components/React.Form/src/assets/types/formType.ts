export type IUNControlFormData = {
  unControl_name: string;
  unControl_age: number;
  unControl_email: string;
  unControl_password: string;
  unControl_confirm_password: string;
  unControl_select: string | null;
  unControl_T_C: string;
  unControl_select_country: string | null;
};

export type IControlFormData = {
  control_name: string;
  control_age: number;
  control_email: string;
  control_password: string;
  control_confirm_password: string;
  control_select: string | null;
  control_T_C: string;
  control_select_country: string | null;
};

export type ReducerControlForm = {
  controlForm: IControlFormData;
  unControlForm: IUNControlFormData;
};
