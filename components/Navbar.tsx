import Link from 'next/link'
import Container from '@/components/ui/Container'
import MainNav from '@/components/MainNav'
import NavbarActions from '@/components/NavbarActions'
import getCategories from '@/actions/get-categories'

export const revalidate = 0

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  )
}
export default Navbar
