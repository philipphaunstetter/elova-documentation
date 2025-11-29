import Link from 'next/link'

import { Heading } from '@/components/Heading'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import { EnvelopeIcon } from '@/components/icons/EnvelopeIcon'
import { UserIcon } from '@/components/icons/UserIcon'
import { UsersIcon } from '@/components/icons/UsersIcon'

interface Resource {
  href: string
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

const resources: Array<Resource> = [
  {
    href: '/release-notes',
    name: 'Release Notes',
    description:
      'Stay up to date with the latest Elova features, improvements, and bug fixes.',
    icon: EnvelopeIcon,
  },
  {
    href: '/troubleshooting',
    name: 'Troubleshooting',
    description:
      'Find solutions to common issues and learn how to debug problems with your Elova deployment.',
    icon: UserIcon,
  },
]

function ResourceIcon({ icon: Icon }: { icon: Resource['icon'] }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 dark:fill-white/10 dark:stroke-zinc-400" />
    </div>
  )
}

function Resource({ resource }: { resource: Resource }) {
  return (
    <div className="flex rounded-2xl bg-zinc-50 dark:bg-white/2.5">
      <div className="rounded-2xl ring-1 ring-zinc-900/7.5 ring-inset dark:ring-white/10 w-full">
        <div className="rounded-2xl px-4 pt-16 pb-4">
          <ResourceIcon icon={resource.icon} />
          <h3 className="mt-4 text-sm/7 font-semibold text-zinc-900 dark:text-white">
            <Link href={resource.href}>
              {resource.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            {resource.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
        Resources
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
