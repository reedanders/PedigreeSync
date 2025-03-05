interface LoadingSkeletonProps {
  cardClass: string;
  cardBodyClass: string;
}

export function LoadingSkeleton({ cardClass, cardBodyClass }: LoadingSkeletonProps) {
  const skeletonClass = "skeleton bg-gray-200 dark:bg-gray-700 animate-pulse";

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Database Filters Skeleton */}
            <div className={`lg:col-span-full ${cardClass}`}>
              <div className={cardBodyClass}>
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="space-y-4">
                      <div className={`h-4 w-32 ${skeletonClass}`}></div>
                      <div className={`h-10 ${skeletonClass}`}></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Animal Identification Skeleton */}
            <div className={`lg:col-span-2 ${cardClass}`}>
              <div className={cardBodyClass}>
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className="space-y-4">
                  <div className={`h-10 ${skeletonClass}`}></div>
                  <div className={`h-10 ${skeletonClass}`}></div>
                </div>
              </div>
            </div>

            {/* Conception Skeleton */}
            <div className={cardClass}>
              <div className={cardBodyClass}>
                <div className={`h-6 w-48 mb-4 ${skeletonClass}`}></div>
                <div className={`h-10 ${skeletonClass}`}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}