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


if __name__ == '__main__':
    pytest.main()
