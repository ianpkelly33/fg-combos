'use client';

import Link from 'next/link';

const links = [
  { name: 'Street Fighter III: 3rd Strike', href: '/sf33s' },
  { name: 'Street Fighter 6', href: '/sf6' },
  { name: 'Under Night In-Birth II Sys:Celes', href: '/uni2' },
  { name: 'Guilty Gear XX Accent Core Plus R', href: '/ggacpr' },
  { name: 'Guilty Gear Xrd REV2', href: '/ggxrdrev2' }
];

export default function Page() {
  return (
    <>
      {links.map((link) => {
        return (
          <table>
            <tbody>
              <tr>
                <th>
                  <Link
                    key={link.name}
                    href={link.href}
                  >
                    <p>{link.name}</p>
                  </Link>
                </th>
              </tr>
            </tbody>
          </table>
        );
      })}
    </>
  );
}
