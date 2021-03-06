//基础加减
new Vue({
    el: "#content1",
    data: {
        add1: 1,
        add2: 2000,
        num1: 1,
        num2: 3000,
        num3: 5000, //设置总价的最小值
    },
    methods: {
        add: function (inc, inc2, inc3) {
            this.add1 += inc;
            this.add2 += inc2;
            this.num3 = this.add2 + this.num2;
        },
        sub: function (dec, dec2, dec3) {
            this.add1 -= dec;
            this.add2 -= dec2;
            this.num3 = this.add2 + this.num2;
            if (this.add1 <= 1) {
                this.add1 = 1;
            }
            if (this.add2 <= 2000) {
                this.add2 = 2000;
            }
            if (this.num3 <= 5000) {
                this.num3 = 5000;
            }
        },
        numadd: function (mun1, mun2, mun3) {
            this.num1 += mun1;
            this.num2 += mun2;
            this.num3 = this.add2 + this.num2;
            this.num3 = this.add2 + this.num2;
        },
        numsub: function (mun1, mun2, mun3) {
            this.num1 -= mun1;
            this.num2 -= mun2;
            this.num3 = this.add2 + this.num2;
            if (this.num1 <= 1) {
                this.num1 = 1;
            }
            if (this.num2 <= 3000) {
                this.num2 = 3000;
            }
            if (this.num3 <= 5000) {
                this.num3 = 5000;
            }
        },
    }
});


$(function () {
    $(".b666").click(function () {
        var $this = $(this);
        $(".fixed").css("display", "block");
        $(".sure").click(function () {
            $this.parent().css("display", "none");
            $(this).parent().css("display", "none");
        });
        $(".quxiao").click(function () {
            $(this).parent().css("display", "none");
        });
    });
});