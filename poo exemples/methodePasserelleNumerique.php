<?php
class StudentPasserelleNumerique {
  public $name;
  public $surname;

  function __construct($name, $surname) {
    $this->name = $name;
    $this->surname = $surname;
  }
  function code() {
    echo($this->name . " is coding");
  }
}
$student = new StudentPasserelleNumerique("Alper", "Akbulut");
echo($student->code());
?>
