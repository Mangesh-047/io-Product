export interface Iproduct {
    pname: string;
    pdesc: string;
    pcat:  Ipcat
}


export type Ipcat = 'Product' | 'Catlog'