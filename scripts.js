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
            <table id="header" width="100%">
                <colgroup>
                    <col span="1" style="width: 50%;">
                    <col span="1" style="width: 50%;">
                </colgroup>
                <tbody>
                    <tr>
                        <td class="title title--lg bold">${headerConstants.shop} ${shop.name}</td>
                        <td>${headerConstants.cashierName} <span class="bold">${shop.cashier}</span></td>
                    </tr>
                    <tr>
                        <td class="title title--md bold">${headerConstants.saleOrder}</td>
                        <td>
                            ${shop.address} - ${shop.phone}
                        </td>
                    </tr>                    
                    <tr>
                        <td colspan="2">${headerConstants.customer.name} <span class="bold">${customer.name}</span></td>
                    </tr>
                    <tr>
                        <td colspan="2">${headerConstants.customer.address}  ${customer.address}</td>
                    </tr>
                    <tr>
                        <td class="border-top border-bottom">${headerConstants.order.code} <span class="bold">${order.code}</span></td>
                        <td class="border-top border-bottom">${headerConstants.order.dateTime} <span class="bold">${order.time} - ${order.date}</span></td>
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
                        <th class="border-right--none border-bottom--double">${orderLinesConstants.row}</th>
                        <th class="border-bottom--double">${orderLinesConstants.productName}</th>
                        <th class="border-bottom--double">${orderLinesConstants.unitPrice}</th>
                        <th class="border-bottom--double">${orderLinesConstants.quantity}</th>
                        <th class="border-bottom--double">${orderLinesConstants.tax}</th>
                        <th class="border-bottom--double">${orderLinesConstants.discount}</th>
                        <th class="border-bottom--double">${orderLinesConstants.total}</th>
                    </tr>
                </thead>
                <tbody>
                ${orderLines.map((orderLine, index) => {
            return `
                    <tr>
                        <td class="border-right--none">${index++}</td>
                        <td>${orderLine.name}</td>
                        <td>${orderLine.price}</td>
                        <td>${orderLine.quantity}\n${orderLine.unit}</td>
                        <td>${orderLine.tax}</td>
                        <td>${orderLine.discount}</td>
                        <td>${orderLine.total}</td>
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
                    <col span="1" style="width: 35.7%;">
                    <col span="1" style="width: 64.3%;">
                </colgroup>

                <tbody>
                    <tr>
                        <td class="border-right--none border-top--double">${orderConstants.totalAmount}</td>
                        <td class="border-top--double">${order.totalAmount}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.totalTax}</td>
                        <td>${order.totalTax}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.totalDiscount}</td>
                        <td>${order.totalDiscount}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.gift}</td>
                        <td>${order.gift}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.finalAmount}</td>
                        <td>${order.finalAmount}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.paidAmount}</td>
                        <td>${order.paidAmount}</td>
                    </tr>
                    <tr>
                        <td class="border-right--none">${orderConstants.reminderAmount}</td>
                        <td>${order.reminderAmount}</td>
                    </tr>
                    <tr>
                        <td class="border-bottom--none border-right--none border-top--double">${footerConstants.qrDesc}</td>
                        <td class="border-bottom--none border-top--double">${footerConstants.barcodeDesc}</td>
                    </tr>
                </tbody>
            </table>
            `
    }

    print() {
        this.initialLayout()
        window.print()
    }
}

