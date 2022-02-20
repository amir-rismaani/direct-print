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
            <table id="header">
                <colgroup>
                    <col span="1" style="width: 50%;">
                    <col span="1" style="width: 50%;">
                </colgroup>
                <tbody>
                    <tr>
                        <td>${headerConstants.shop} ${shop.name}</td>
                        <td>${headerConstants.cashierName} ${shop.cashier}</td>
                    </tr>
                    <tr>
                        <td>${headerConstants.saleOrder}</td>
                        <td>
                            ${shop.address}
                            ${shop.phone}
                        </td>
                    </tr>                    
                    <tr>
                        <td colspan="2">${headerConstants.customer.name} ${customer.name}</td>
                    </tr>
                    <tr>
                        <td colspan="2">${headerConstants.customer.address} ${customer.address}</td>
                    </tr>
                    <tr>
                        <td>${headerConstants.order.code} ${order.code}</td>
                        <td>${headerConstants.order.dateTime} ${order.time} - ${order.date}</td>
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
            <table id="content">
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
                        <th>${orderLinesConstants.row}</th>
                        <th>${orderLinesConstants.productName}</th>
                        <th>${orderLinesConstants.unitPrice}</th>
                        <th>${orderLinesConstants.quantity}</th>
                        <th>${orderLinesConstants.tax}</th>
                        <th>${orderLinesConstants.discount}</th>
                        <th>${orderLinesConstants.total}</th>
                    </tr>
                </thead>
                <tbody>
                ${orderLines.map((orderLine, index) => {
            return `
                                <tr>
                                    <td>${index++}</td>
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
            <table id = "footer">
                <colgroup>
                    <col span="1" style="width: 35%;">
                    <col span="1" style="width: 65%;">
                </colgroup>

                <tbody>
                    <tr>
                        <td>${orderConstants.totalAmount}</td>
                        <td>${order.totalAmount}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.totalTax}</td>
                        <td>${order.totalTax}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.totalDiscount}</td>
                        <td>${order.totalDiscount}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.gift}</td>
                        <td>${order.gift}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.finalAmount}</td>
                        <td>${order.finalAmount}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.paidAmount}</td>
                        <td>${order.paidAmount}</td>
                    </tr>
                    <tr>
                        <td>${orderConstants.reminderAmount}</td>
                        <td>${order.reminderAmount}</td>
                    </tr>
                    <tr>
                        <td>${footerConstants.qrDesc}</td>
                        <td>${footerConstants.barcodeDesc}</td>
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

