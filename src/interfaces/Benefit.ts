import BenefitDetail from './BenefitDetail';

export default interface Benefit {
    coverageRate: string,
    details: BenefitDetail[],
}
