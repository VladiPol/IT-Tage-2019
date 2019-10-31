// Einfach eine Ausgabe im Dialog
javax.swing.JOptionPane.showMessageDialog(null, "Hello World!!!");

// für die längeren Ausgaben eine Notiz anlegen
var vText = "";
var vNote = model.createNote();
vNote.setName("Ausgabe");
vNote.setComment("1. Zeile\n2. Zeile\n");

// Der Text der Notiz im Dialog ausgeben
vText = vNote.getComment();
javax.swing.JOptionPane.showMessageDialog(null, vText);