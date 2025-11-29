import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/installation',
    name: 'Installation',
    description: 'Get Elova running with Docker in minutes.',
  },
  {
    href: '/docker-setup',
    name: 'Docker Setup',
    description: 'Configure Elova using our Docker image from Docker Hub.',
  },
  {
    href: '/environment-variables',
    name: 'Environment Variables',
    description:
      'Configure Elova with environment variables for your deployment.',
  },
  {
    href: '/docker-compose',
    name: 'Docker Compose',
    description:
      'Deploy Elova with Docker Compose for easy multi-container setup.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-base text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button href={guide.href} variant="text" arrow="right">
                Read more
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
