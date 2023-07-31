import CertificateIcon from "../../Icons/CertificateIcon/CertificateIcon";
import DeliveryIcon from "../../Icons/DeliveryIcon/DeliveryIcon";
import SecurePaymentIcon from "../../Icons/SecurePaymentIcon/SecurePaymentIcon";
import SupportIcon from "../../Icons/SupportIcon/SupportIcon";

const stats = [
  {
    id: 1,
    icon: <DeliveryIcon />,
    description: "Envíos rápidos y seguros a cualquier parte del Perú",
    title: "Envíos a domicilio",
  },
  { 
    id: 2,
    icon: <CertificateIcon />,
    description: "Todos los productos tienen garantía asegurada",
    title: "Garantía al 100%",
  },
  {
    id: 3,
    icon: <SecurePaymentIcon />,
    description: "Tu información se mantiene protegida",
    title: "Pago Seguro",
  },
  {
    id: 4,
    icon: <SupportIcon />,
    description: "Atendemos tus consultas en cualquier momento",
    title: "Soporte 24/7",
  },
];

const Stats = () => {
  return (
    <div className="py-12 lg:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 text-center">
        { stats.map((stat) => (
          <div
            key={ stat.id }
            className="py-6 sm:py-8 px-6 bg-gray-100 dark:bg-gray-900 rounded-lg"
          >
            <dd className="h-12 mb-3 text-primary-600 dark:text-primary-500">
              { stat.icon }
            </dd>
            <dd className="mb-1 text-lg sm:text-xl font-semibold">
              { stat.title }
            </dd>
            <dt className="text-sm text-black/80 dark:text-white/50">
              { stat.description }
            </dt>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stats;
