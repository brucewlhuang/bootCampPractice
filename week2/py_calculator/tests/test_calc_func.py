import pytest
from src import calc_func


class TestClass:
    def setup(self):
        self.cal_func = calc_func

    def teardown(self):
        pass

    def test_add_expect_value_equal_to_five(self):
        num1 = 3.0
        num2 = 2.0
        value = self.cal_func.add(num1, num2)
        assert value == 5.0

    def test_add_expect_value_not_equal_to_five(self):
        num1 = 3.0
        num2 = 3.0
        value = self.cal_func.add(num1, num2)
        assert value != 5.0


if __name__ == '__main__':
    pytest.main()
