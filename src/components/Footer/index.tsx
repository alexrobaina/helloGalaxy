'use client'

import { FC } from "react";
import { TbBrandInstagram } from "react-icons/tb";
import { useTranslations } from "next-intl";

export const Footer: FC = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="bg-gray-800 text-white py-12 w-full">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Hello Galaxy</h3>
            <p className="text-gray-200">
              Creamos software a medida. 
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-200">
              <li>📍 Mendoza, Godoy Cruz, Argentina</li>
              <li className="hover:text-white cursor-pointer">
                <a href="https://wa.me/541138997032">📞 +54 11 3899-70-32</a>
              </li>
              <li className="hover:text-white cursor-pointer">
                <a className="flex gap-1 items-center cursor-pointer" target="_blank" href="https://www.instagram.com/hellogalaxy.sf">
                  <TbBrandInstagram size={22}/>
                  <div className="flex items-center">Instagram</div>
                </a>
              </li>
              <li className="hover:text-white">✉️ info.hellogalaxy@gmail.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2 text-gray-200">
              <li>{`${t('monday')} ${t('to')} ${t('friday')}: 9:00 - 18:00 UTC-3`}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-200" />
      </div>
    </footer>
  )
}