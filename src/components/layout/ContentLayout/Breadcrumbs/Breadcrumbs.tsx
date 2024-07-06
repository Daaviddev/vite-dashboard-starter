import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

interface BreadcrumbProps {
  pathname: string;
}

const Breadcrumbs = ({ pathname }: BreadcrumbProps) => {
  const [pathSegments, setPathSegments] = useState<string[]>([]);
  const [pageName, setPageName] = useState<string>('');

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  useEffect(() => {
    if (pathname) {
      const segments = pathname.split('/').filter(Boolean);
      setPathSegments(segments);

      if (segments.length > 0) {
        const lastSegment = segments[segments.length - 1];
        setPageName(capitalizeFirstLetter(lastSegment));
      } else {
        setPageName('');
      }
    }
  }, [pathname]);

  return (
    <Breadcrumb>
      <h1 className="font-bold ">{pageName}</h1>
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          const href = '/' + pathSegments.slice(0, index + 1).join('/');
          const isLast = index === pathSegments.length - 1;

          return (
            <BreadcrumbItem key={href}>
              {index > 0 && <BreadcrumbSeparator />}
              {isLast ? (
                <BreadcrumbPage>{capitalizeFirstLetter(segment)}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link to={href}>{capitalizeFirstLetter(segment)}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
