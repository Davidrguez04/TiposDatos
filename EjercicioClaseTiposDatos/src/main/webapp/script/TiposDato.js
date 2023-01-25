/**
 * 
 */
function alumno(nombre,apellidos,edad){
        this.nombre=nombre;
        this.apellidos= apellidos;
        this.edad= edad;
}
 
 var AlumnoUno=new alumno('David','Rodriguez Alonso', 18);
 document.write(AlumnoUno instanceof object);
 document.write(AlumnoUno instanceof alumno);
 document.write(typeof(AlumnoUno));
 
