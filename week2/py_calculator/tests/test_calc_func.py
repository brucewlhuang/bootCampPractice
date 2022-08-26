import pytest
from src import calc_func


class TestClass:
    def setup(self):
        self.cal_func = calc_func

    def teardown(self):
        pass

    def test_add_expect_result_equal_to_five(self):
        num1 = 3.0
        num2 = 2.0
        result = self.cal_func.add(num1, num2)
        assert result == 5.0

    def test_add_expect_result_not_equal_to_five(self):
        num1 = 3.0
        num2 = 3.0
        result = self.cal_func.add(num1, num2)
        assert result != 5.0

    def test_add_expect_result_bigger_than_zero(self):
        num1 = 3.0
        num2 = -1.0
        result = self.cal_func.add(num1, num2)
        assert result > 0.0

    def test_add_expect_result_smaller_than_zero(self):
        num1 = 3.0
        num2 = -5.0
        result = self.cal_func.add(num1, num2)
        assert result < 0.0

    def test_subtract_expect_result_equal_to_one(self):
        num1 = 3.0
        num2 = 2.0
        result = self.cal_func.subtract(num1, num2)
        assert result == 1.0

    def test_subtract_expect_result_equal_to_minus_one(self):
        num1 = 2.0
        num2 = 3.0
        result = self.cal_func.subtract(num1, num2)
        assert result == -1.0

    def test_multiply_expect_result_equal_to_six(self):
        num1 = 3.0
        num2 = 2.0
        result = self.cal_func.multiply(num1, num2)
        assert result == 6.0

    def test_multiply_expect_result_equal_to_minus_six(self):
        num1 = -3.0
        num2 = 2.0
        result = self.cal_func.multiply(num1, num2)
        assert result == -6.0

    def test_multiply_expect_result_equal_to_zero(self):
        num1 = -3.0
        num2 = 0.0
        result = self.cal_func.multiply(num1, num2)
        assert result == 0.0

    def test_divide_expect_result_bigger_than_zero_when_positive_dividend_and_positive_divisor(self):
        dividend = 5.0
        divisor = 3.0
        result = self.cal_func.divide(dividend, divisor)
        assert result >= 0.0

    def test_divide_expect_result_smaller_than_zero_when_positive_dividend_and_negative_divisor(self):
        dividend = 3.0
        divisor = -1.0
        result = self.cal_func.divide(dividend, divisor)
        assert result <= 0.0

    def test_divide_expect_result_bigger_than_zero_when_negative_dividend_and_negative_divisor(self):
        dividend = -3.0
        divisor = -1.0
        result = self.cal_func.divide(dividend, divisor)
        assert result >= 0.0

    @pytest.mark.xfail(raises=ZeroDivisionError)
    def test_divide_expect_result_should_throw_error_when_divisor_equal_to_zero(self):
        dividend = 3.0
        divisor = 0.0
        self.cal_func.divide(dividend, divisor)


if __name__ == '__main__':
    pytest.main()
