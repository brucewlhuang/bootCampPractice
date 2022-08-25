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


if __name__ == '__main__':
    pytest.main()
