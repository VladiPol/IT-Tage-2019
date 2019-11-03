// Einfach eine Ausgabe im Dialog
javax.swing.JOptionPane.showMessageDialog(null, "Hello World!!!");

// für die längeren Ausgaben eine Notiz anlegen
var v_Text = "";
var v_Note = model.createNote();
v_Note.setName("Ausgabe");
v_Note.setComment("1. Zeile\n2. Zeile\n");

// Der Text der Notiz im Dialog ausgeben
v_Text = v_Note.getComment();
javax.swing.JOptionPane.showMessageDialog(null, v_Text);

// Interaktive Aktion mit dem Benutzer
var v_Answer = javax.swing.JOptionPane.showConfirmDialog (null , "Weiter?", "Question", javax.swing.JOptionPane.YES_NO_OPTION);
if ( v_Answer == 0 ){
  javax.swing.JOptionPane.showMessageDialog(null, "Answer is Yes");
}
else{
  javax.swing.JOptionPane.showMessageDialog(null, "Answer is No");
}
