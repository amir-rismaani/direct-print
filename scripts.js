export default class InvoiceOrder {
    constructor(constant, data) {
        this.constant = constant;
        this.data = data;
        this.order = data.order;
        this.html = '';
    }

    initialLayout() {
        let invoiceContainer = document.getElementById('invoice')
        this.headerLayout();
        this.contentLayout()
        this.footerLayout();
        invoiceContainer.innerHTML = this.html;
    }

    headerLayout() {
        const headerConstants = this.constant.header;
        const customer = this.data.customer;
        const shop = this.data.shop;
        const order = this.data.order;
        this.html += `
            <table id="header" width="100%" class="margin-top-5">
                <colgroup>
                    <col span="1" style="width: 50%;">
                    <col span="1" style="width: 50%;">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="title title--lg text-bold padding-right-5">${headerConstants.shop} ${shop.name}</td>
                        <td>${headerConstants.cashierName} <span class="text-bold">${shop.cashier}</span></td>
                    </tr>
                    <tr>
                        <td class="title title--md text-bold padding-right-5">${headerConstants.saleOrder}</td>
                        <td>
                            ${shop.address} - ${shop.phone}
                        </td>
                    </tr>                    
                    <tr>
                        <td colspan="2" class="padding-right-5">${headerConstants.customer.name} <span class="text-bold">${customer.name}</span></td>
                    </tr>
                    <tr>
                        <td colspan="2" class="padding-right-5"><span class="d-block margin-bottom-5">${headerConstants.customer.address}  ${customer.address}</span></td>
                    </tr>
                    <tr>
                        <td class="border-top border-bottom padding-right-5">${headerConstants.order.code} <span class="text-bold">${order.code}</span></td>
                        <td class="border-top border-bottom">${headerConstants.order.dateTime} <span class="text-bold">${order.time} - ${order.date}</span></td>
                    </tr>
                </tbody>
            </table>
        `
    }

    contentLayout() {
        const orderLinesConstants = this.constant.order.lines;
        const orderLines = this.data.order.lines;

        console.log(orderLinesConstants);
        console.log(orderLines);


        this.html += `
            <table id="content" width="100%">
                <colgroup>
                    <col span="1" style="width: 5%;">
                    <col span="1" style="width: 30%;">
                    <col span="1" style="width: 15%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 10%;">
                    <col span="1" style="width: 20%;">
                </colgroup>

                <thead>
                    <tr>
                        <th class="border-right-none border-bottom-double">${orderLinesConstants.row}</th>
                        <th class="border-bottom-double">${orderLinesConstants.productName}</th>
                        <th class="border-bottom-double">${orderLinesConstants.unitPrice}</th>
                        <th class="border-bottom-double">${orderLinesConstants.quantity}</th>
                        <th class="border-bottom-double">${orderLinesConstants.tax}</th>
                        <th class="border-bottom-double">${orderLinesConstants.discount}</th>
                        <th class="border-bottom-double">${orderLinesConstants.total}</th>
                    </tr>
                </thead>
                <tbody>
                ${orderLines.map((orderLine, index) => {
            return `
                    <tr>
                        <td class="border-right-none">${++index}</td>
                        <td class="text-align-right">${orderLine.name}</td>
                        <td>${this.separator(orderLine.price)}</td>
                        <td>${this.separator(orderLine.quantity)}\n${orderLine.unit}</td>
                        <td>${this.separator(orderLine.tax)}</td>
                        <td>${this.separator(orderLine.discount)}</td>
                        <td>${this.separator(orderLine.total)}</td>
                    </tr>
                `
        }).join("")}
                </tbody>
            </table>
    `
    }

    footerLayout() {
        const footerConstants = this.constant.footer;
        const orderConstants = this.constant.order;
        const order = this.data.order;

        this.html += `
            <table id = "footer" width="100%">
                <colgroup>
                    <col span="1" style="width: 35%;">
                    <col span="1" style="width: 65%;">
                </colgroup>

                <tbody>
                    <tr>
                        <td class="border-right-none border-top-double padding-right-5">${orderConstants.totalAmount}</td>
                        <td class="border-top-double text-align-left text-bold padding-left-5">${this.separator(order.totalAmount)}</td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.totalTax}</td>
                        <td class="text-align-left text-bold padding-left-5">${this.separator(order.totalTax)}</td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.totalDiscount}</td>
                        <td class="text-align-left text-bold padding-left-5">${this.separator(order.totalDiscount)}</td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.gift}</td>
                        <td class="text-align-left text-bold padding-left-5">${this.separator(order.gift)}</td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.finalAmount}</td>
                        <td class="text-align-left text-bold padding-left-5 highlight-black text-size-lg">${this.separator(order.finalAmount)} <span class="unit text-size-md">ریال</span></td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.paidAmount}</td>
                        <td class="text-align-left text-bold padding-left-5">${this.separator(order.paidAmount)}</td>
                    </tr>
                    <tr>
                        <td class="border-right-none padding-right-5">${orderConstants.reminderAmount}</td>
                        <td class="text-align-left text-bold padding-left-5">${this.separator(order.reminderAmount)}</td>
                    </tr>
                    <tr>
                        <td class="border-bottom-none border-right-none border-top-double"><div class="d-flex"><img class="qr-code" src="./assets/images/qr-code.png"/><span class="text-size-xs text-align-justify padding-right-2 padding-left-12">${footerConstants.qrDesc}</span></div></td>
                        <td class="border-bottom-none border-top-double"><div class="d-flex d-flex-column"><span class="text-align-center text-bold text-size-sm padding-top-5 padding-bottom-5 margin-top-5">${footerConstants.barcodeDesc}</span><img class="barcode padding-bottom-5" src="./assets/images/barcode.png"/></div></td>
                    </tr>
                </tbody>
            </table>
            `
    }

    separator(price) {
        return price.toLocaleString('en');
    }

    print() {
        this.initialLayout();
        window.print();
    }
}

