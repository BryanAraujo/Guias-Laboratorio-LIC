using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace prueba2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Escriba el numero");
            string numero = Console.ReadLine();

            for(int i = 0; i < numero.Length; i++)
            {
                Console.Write("El numero es");
                Console.WriteLine(numero[i]);
            }

            Console.WriteLine("Fin del programa");
            Console.ReadKey();
        }
    }
}
