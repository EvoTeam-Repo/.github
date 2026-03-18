<?php
// EvoTeam PHP Playground 🧡
// Heavier version for the language bar
// Explore and experiment with PHP concepts

// ----- User Class -----
class User {
    public $name;
    public $level;
    public $points;

    public function __construct($name) {
        $this->name = $name;
        $this->level = 1;
        $this->points = 0;
    }

    public function gainPoints($amount) {
        $this->points += $amount;
        if ($this->points >= $this->level * 10) {
            $this->levelUp();
        }
    }

    private function levelUp() {
        $this->level++;
        $this->points = 0;
        echo "🎉 {$this->name} leveled up! You are now level {$this->level}\n";
    }

    public function __toString() {
        return "User({$this->name}, Level: {$this->level}, Points: {$this->points})";
    }
}

// ----- Functions -----
function greetUser($user) {
    echo "Welcome to EvoTeam, {$user->name}! Where code evolves 🧡\n";
}

function fibonacci($n) {
    $a = 0;
    $b = 1;
    $sequence = [];
    for ($i = 0; $i < $n; $i++) {
        $sequence[] = $a;
        $temp = $a + $b;
        $a = $b;
        $b = $temp;
    }
    return $sequence;
}

function randomFact() {
    $facts = [
        "PHP was created in 1994 by Rasmus Lerdorf 🐘",
        "EvoTeam evolves with your imagination 🌟",
        "Did you know? PHP powers a huge part of the web 💻",
        "Fun fact: GitHub Pages doesn’t run PHP natively!"
    ];
    return $facts[array_rand($facts)];
}

// ----- Mini Script -----
$evoUser = new User("EvoCoder");
greetUser($evoUser);

echo "First 10 Fibonacci numbers: " . implode(", ", fibonacci(10)) . "\n";
echo "💡 Fun Fact: " . randomFact() . "\n";

// Simulate points gain
for ($i = 0; $i < 12; $i++) {
    $evoUser->gainPoints(1);
}

echo "Final user state: {$evoUser}\n";

// ----- Conditional Demo -----
$hour = date("H");
if ($hour < 12) {
    echo "Good morning! 🌅\n";
} elseif ($hour < 18) {
    echo "Good afternoon! ☀️\n";
} else {
    echo "Good evening! 🌙\n";
}
?>
