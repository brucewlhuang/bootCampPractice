from src import calc_class
import pytest


class TestClass:
    def setup(self):
        self.num1 = 3.0
        self.num2 = 2.0
        self.cal_func = calc_class.Calculator()

    def teardown(self):
        pass

    def verify_answer(self, expected, answer, last_answer):
        assert expected == answer
        assert expected == last_answer

    def test_last_answer_init(self):
        assert self.cal_func.last_answer == 0.0

    def test_add(self):
        answer = self.cal_func.add(self.num1, self.num2)
        self.verify_answer(5.0, answer, self.cal_func.last_answer)

    def test_subtract(self):
        answer = self.cal_func.subtract(self.num1, self.num2)
        self.verify_answer(1.0, answer, self.cal_func.last_answer)

    def test_multiply(self):
        answer = self.cal_func.multiply(self.num1, self.num2)
        self.verify_answer(6.0, answer, self.cal_func.last_answer)

    def test_divide(self):
        answer = self.cal_func.divide(self.num1, self.num2)
        self.verify_answer(1.5, answer, self.cal_func.last_answer)

    def test_maximum(self):
        answer = self.cal_func.maximum(self.num1, self.num2)
        self.verify_answer(3.0, answer, self.cal_func.last_answer)


if __name__ == '__main__':
    pytest.main()
