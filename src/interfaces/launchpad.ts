import {ILaunch} from './launch';

export interface ILaunchPad {
    name: string;
    details: string;
    status: string;
    launches: ILaunch[];
}