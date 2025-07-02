import Link from 'next/link';

type ErrorCardProps = {
  error: string;
  cardClass: string;
  cardBodyClass: string;
};

export function ErrorCard({ error, cardClass, cardBodyClass }: ErrorCardProps) {
  return (
    <div className={cardClass}>
      <div className={cardBodyClass}>
        <div className="p-5 mb-4 bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300">
          {error}
        </div>
        <div className="mt-6">
          <Link 
            href="/manage/animals"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 inline-flex items-center gap-2"
          >
            <span>←</span> Back to animals
          </Link>
        </div>
      </div>
    </div>
  );
}
