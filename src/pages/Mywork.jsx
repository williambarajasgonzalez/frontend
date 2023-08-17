import Header from '../Components/Header'
import Footer from "../Components/Footer";
import sheets from "../assets/sheets.png"
import excel from "../assets/excel.png"
import ibm from "../assets/ibm.png"
import air from "../assets/air.png"


export default function MyWork() {
    return (
        <>
        <div className="bg-blue-200">
                <Header />
                <div className="flex gap-10 p-6 text-center flex-col mt-20">
                        <div>
                            <h1 className="text-3xl text-gray-500 font-bold font-sans">Programas que utilizo</h1>
                        </div>
                        <div className="flex gap h-full align-middle gap-10 flex-wrap justify-center p-3">
                            <img className="w-32 shadow-xl rounded-2xl p-4" src={sheets} alt='profile-icon'/>
                            <img className="w-32 shadow-xl rounded-2xl p-4" src={excel} alt='profile-icon'/>
                            <img className="w-32 shadow-xl rounded-2xl p-4" src={ibm} alt='profile-icon'/>
                            <img className="w-32 shadow-xl rounded-2xl p-4" src={air} alt='profile-icon'/>
                        </div>

                        <div className='flex flex-col justify-center p-10'>
                            <label className='text-2xl text-red-600 font-bold'>
                                Ser el monitoreo de datos de gestión de HR
                            </label>
                            <ul>
                                <li className='py-5'>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Análisis de RRHH</strong>
                                    </label>
                                    <ul>
                                        <li>Utilizar datos para analizar tendencias en RRHH y tomar decisiones informadas.</li>
                                        <li>Revisar currículums y solicitudes.</li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Mantenimiento de Registros</strong>
                                    </label>
                                    <ul>
                                        <li>Mantener registros y archivos precisos de los empleados.</li>
                                        <li>Administrar la documentación relacionada con contrataciones, ascensos y despidos.</li>
                                    </ul>
                                </li>
                            </ul>

                            <label className='text-2xl text-red-600  font-bold mt-14'>
                                Creando una base de datos
                            </label>
                            <ul>
                                <li className='p-2'>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Importación y Limpieza de Datos </strong>
                                    </label>
                                    <ul className='flex gap-2 flex-col'>
                                        <li>Importar datos de diversas fuentes a Google Sheets.</li>
                                        <li>Limpiar y organizar los datos eliminando duplicados, corrigiendo errores y aplicando formato.</li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li className='p-2'>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Manipulación y Transformación de Datos</strong>
                                    </label>
                                    <ul className='flex gap-2 flex-col'>
                                        <li>Utilizar fórmulas, funciones y expresiones para realizar cálculos y transformaciones en los datos.</li>
                                        <li>Crear tablas dinámicas y gráficos para resumir y visualizar datos.</li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li className='p-2'>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Visualización de Datos</strong>
                                    </label>
                                    <ul className='flex gap-2 flex-col'>
                                        <li>Crear gráficos, diagramas y paneles para visualizar los datos.</li>
                                        <li>Usar el formato condicional para resaltar puntos de datos importantes.</li>
                                    </ul>
                                </li>
                            </ul>

                            <ul>
                                <li className='p-2'>
                                    <label className='text-lg text-gray-700 font-bold'>
                                        <strong>Generación de Informes y Documentación</strong>
                                    </label>
                                    <ul className='flex gap-2 flex-col'>
                                        <li>Crear informes y resúmenes de los hallazgos del análisis de datos.</li>
                                        <li>Documentar las metodologías utilizadas para la manipulación y el análisis de datos.</li>
                                    </ul>
                                </li>
                            </ul>
                            
                        </div>
                        
                </div>
                <Footer/>
            </div>
        </>
    );
}