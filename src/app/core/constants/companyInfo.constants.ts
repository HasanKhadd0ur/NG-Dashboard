export interface CompanyInfo {
    companyName : string ,
    email : string ,
    description:string,
    contacts :string[],
    products:string[]
}

export const DefaultCompanyInfo :CompanyInfo= {
    companyName:"PN 4 Marketing",
    email:"info@pn4m.com",
    description :" A results-driven marketing agency specializing in digital strategies, brand development, and performance marketing",
    contacts:[],
    products:['Angular','React','Vue','Laravel']
}
