export default {
    shop: {
        name: "ایرانشهر",
        cashier: "مدیر فروشگاه",
        address: "خیابان شریعتی، کوچه فرجام، نبش پیرهادی",
        phone: "021-668772001"
    },
    customer: {
        name: "فرهاد راد",
        address: "تهران، پل رومی، خیابان بهار، پلاک 98، واحد 3"
    },
    order: {
        code: "9984208370008",
        date: "1400/05/03",
        time: "09:22",
        lines: [
            {
                id: 8851,
                name: "ران گوسفندی بدون استخوان",
                price: 1000000,
                quantity: 2,
                unit: "کیلوگرم",
                tax: 25000,
                discount: 20000,
                total: 1980000
            },
            {
                id: 3352,
                name: "راسته گوساله",
                price: 800000,
                quantity: 10,
                unit: "کیلوگرم",
                tax: 15000,
                discount: 0,
                total: 1600000
            },
            {
                id: 3352,
                name: "نوشابه انرژی زا جنسینگ 250 میلی لیتری بیگ بر",
                price: 80000,
                quantity: 2,
                unit: "عدد",
                tax: 0,
                discount: 0,
                total: 160000
            }
        ],
        totalAmount: 3680000,
        totalTax: 40000,
        totalDiscount: 20000,
        gift: 0,
        finalAmount: 3700000,
        paidAmount: 1400000,
        reminderAmount: 2300000
    }
}