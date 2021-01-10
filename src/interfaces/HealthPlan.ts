import Benefit from './Benefit';

export default interface HealthPlan {
    id: number ,
    name: string,
    rate: number,
    period: string,
    benefits: Benefit,
}