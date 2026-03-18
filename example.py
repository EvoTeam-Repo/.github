# EvoTeam Python Playground 🐍
# Heavier version for the EvoTeam language bar
# Explore, modify, and experiment! 🧡

import random
import time

# ----- User System -----
class User:
    def __init__(self, name):
        self.name = name
        self.level = 1
        self.points = 0

    def gain_points(self, amount):
        self.points += amount
        if self.points >= self.level * 10:
            self.level_up()

    def level_up(self):
        self.level += 1
        self.points = 0
        print(f"🎉 {self.name} leveled up! You are now level {self.level}")

    def __str__(self):
        return f"User({self.name}, Level: {self.level}, Points: {self.points})"

# ----- Fun Utilities -----
def greet_user(user):
    print(f"Welcome to EvoTeam, {user.name}! Where code evolves 🧡")

def fibonacci(n):
    a, b = 0, 1
    sequence = []
    for _ in range(n):
        sequence.append(a)
        a, b = b, a + b
    return sequence

def random_fact():
    facts = [
        "Python was created in 1991 by Guido van Rossum 🐍",
        "EvoTeam evolves with your imagination 🌟",
        "The first programming language was probably Fortran 🔧",
        "Did you know? GitHub Pages can host your static site for free 💻"
    ]
    return random.choice(facts)

# ----- Mini Game: Guess the Number -----
def guess_number_game():
    number = random.randint(1, 10)
    attempts = 0
    print("🎮 Guess a number between 1 and 10!")
    while True:
        guess = input("Your guess: ")
        attempts += 1
        if not guess.isdigit():
            print("Please enter a number!")
            continue
        guess = int(guess)
        if guess == number:
            print(f"✅ Correct! You guessed it in {attempts} attempts.")
            break
        elif guess < number:
            print("Too low! ⬆️")
        else:
            print("Too high! ⬇️")

# ----- Main Execution -----
if __name__ == "__main__":
    # Create a user
    evo_user = User("EvoCoder")
    greet_user(evo_user)

    # Show Fibonacci
    print("First 15 Fibonacci numbers:", fibonacci(15))

    # Show random fact
    print("💡 Fun Fact:", random_fact())

    # Play mini game
    play_game = input("Do you want to play a mini guessing game? (y/n): ").lower()
    if play_game == 'y':
        guess_number_game()

    # Level up demonstration
    for _ in range(12):
        evo_user.gain_points(1)
    print("Final user state:", evo_user)
