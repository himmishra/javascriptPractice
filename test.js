if (memo == 'Provincial Sales Tax') {
    TaxRegimeCode = PST_TaxRegimeCode;
    Tax = PST_Tax;
    TaxStatusCode = PST_GST_TaxStatusCode;
    TaxRateCode = PST_TaxRateCode;
    TaxRate = PST_GST_TaxRate;
    LinktoTransactionsFlexfieldContext = PST_GST_LinktoTransactionsFlexfieldContext;
    LinktoTransactionsFlexfieldSeg1 = Input_LinktoTransactionsFlexfieldSeg1;
    LinktoTransactionsFlexfieldSeg2 = PST_GST_LinktoTransactionsFlexfieldSeg2;
    TaxJurisdictionCode = PST_TaxJurisdictionCode;
} else if (memo == 'Goods and Services Tax') {
    TaxRegimeCode = GST_TaxRegimeCode;
    Tax = GST_Tax;
    TaxStatusCode = PST_GST_TaxStatusCode;
    TaxRateCode = GST_TaxRateCode;
    TaxRate = PST_GST_TaxRate;
    LinktoTransactionsFlexfieldContext = PST_GST_LinktoTransactionsFlexfieldContext;
    LinktoTransactionsFlexfieldSeg1 = Input_LinktoTransactionsFlexfieldSeg1;
    LinktoTransactionsFlexfieldSeg2 = PST_GST_LinktoTransactionsFlexfieldSeg2;
    TaxJurisdictionCode = GST_TaxJurisdictionCode;
} else if (memo == 'US Sales Tax') {
    TaxRegimeCode = US_TaxRegimeCode;
    Tax = US_Tax;
    TaxStatusCode = PST_GST_TaxStatusCode;
    TaxRateCode = US_TaxRateCode;
    TaxRate = PST_GST_TaxRate;
    LinktoTransactionsFlexfieldContext = PST_GST_LinktoTransactionsFlexfieldContext;
    LinktoTransactionsFlexfieldSeg1 = Input_LinktoTransactionsFlexfieldSeg1;
    LinktoTransactionsFlexfieldSeg2 = PST_GST_LinktoTransactionsFlexfieldSeg2;
    TaxJurisdictionCode = US_TaxJurisdictionCode;
}

